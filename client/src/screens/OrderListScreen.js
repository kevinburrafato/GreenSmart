import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_DELETE_RESET } from '../constants/orderConstants';

export default function OrderListScreen(props) {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders());
  }, [dispatch, successDelete]);

  const deleteHandler = (order) => {
    if (window.confirm('Are you sure to delete?')) {
        dispatch(deleteOrder(order._id));
      }
  };
  return (
    <div className="table-container">
      <h1>Orders</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>ID: {order._id}</td>
                <td>USER: {order.user.name}</td>
                <td>DATE: {order.createdAt.substring(0, 10)}</td>
                <td>TOTAL: {order.totalPrice.toFixed(2)}</td>
                <td>PAID: {order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                <td>DELIVERED: {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : 'No'}
                </td>
                <td className="last-td">
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(order)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}