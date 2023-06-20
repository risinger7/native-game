
function MoveFinger(entities, {touches}) {

  touches.filter(t => t.type === "move")

    .forEach(t => {
      let finger = entities[t.id];
      console.log("finter", finger, "t: ", t)
      if(finger && finger.position) {
        finger.position[0] + t.delta.pageX
        finger.position[1] + t.delta.pageY
      }
    })

    return entities

}

export { MoveFinger }