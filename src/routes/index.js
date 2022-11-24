const authRouter = require('./auth');
const userRouter = require('./user');
const productRouter = require('./product');
const cartRouter = require('./cart');
const orderRouter = require('./order');
const paymentRouter = require('./stripe');
const conversationRouter = require('./conversation');
const messageRouter = require('./message');

function route(app) {
  app.use('/v1/auth', authRouter);
  app.use('/v1/user', userRouter);
  app.use('/v1/product', productRouter);
  app.use('/v1/cart', cartRouter);
  app.use('/v1/order', orderRouter);
  app.use('/v1/payment', paymentRouter);
  // app.use('/v1/comment', commentRouter);
  app.use('/v1/conversation', conversationRouter);
  app.use('/v1/message', messageRouter);
}

module.exports = route;
