export const TYPE_LOG = 'log';
function logger (log, type = TYPE_OFF) {
  console[type](log);
}
export default logger;