function getShortMessages(messages) {
  return messages.filter(function(item) {
    return item.message.length < 50 }).map(function(item) {
      return item.message;
    });
}

module.exports = getShortMessages

// test
// function getShortMessages(messages) {
//   var filtered_messages = messages.filter(function(message) {
//     if (message.message.length < 50){
//      return message.message;
//     }
// });
//   var short_messages = filtered_messages.map(function(message){
//     return message.message;
//   });
//   return short_messages;
// }
//My solution
