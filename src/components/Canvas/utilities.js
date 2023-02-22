export function drawObject(context, objectBody) {
  if (context) {
    if (Array.isArray(objectBody)) {
      objectBody.forEach((object) => {
        context.fillStyle = object.color;
        context?.fillRect(object.x, object.y, 10, 10);
      });
    } else {
      context.fillStyle = objectBody.color;
      context?.fillRect(objectBody.x, objectBody.y, 10, 10);
    }
  }
}

export const clearBoard = (context) => {
  if (context) {
    context.clearRect(0, 0, 500, 300);
  }
};
