(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  window.requestAnimationFrame = requestAnimationFrame
})()

function snow (canvas) {
  var flakes = []
  var ctx = canvas.getContext('2d')
  var flakeCount = 100
  var mX = -100
  var mY = -100

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  function draw () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (var i = 0; i < flakeCount; i++) {
      var flake = flakes[i]
      var x = mX
      var y = mY
      var minDist = 100
      var x2 = flake.x
      var y2 = flake.y

      var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y))

      if (dist < minDist) {
        var force = minDist / (dist * dist)
        var xcomp = (x - x2) / dist
        var ycomp = (y - y2) / dist
        var deltaV = force / 2

        flake.velX -= deltaV * xcomp
        flake.velY -= deltaV * ycomp
      } else {
        flake.velX *= 0.98
        if (flake.velY <= flake.speed) {
          flake.velY = flake.speed
        }
        flake.velX += Math.cos(flake.step += 0.05) * flake.stepSize
      }

      ctx.fillStyle = 'rgba(255,255,255,' + flake.opacity + ')'
      flake.y += flake.velY
      flake.x += flake.velX

      if (flake.y >= canvas.height || flake.y <= 0) {
        reset(flake)
      }

      if (flake.x >= canvas.width || flake.x <= 0) {
        reset(flake)
      }

      ctx.beginPath()
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2)
      ctx.fill()
    }
    requestAnimationFrame(draw)
  };

  function reset (flake) {
    flake.x = Math.floor(Math.random() * canvas.width)
    flake.y = 0
    flake.size = (Math.random() * 3) + 2
    flake.speed = (Math.random() * 1) + 0.5
    flake.velY = flake.speed
    flake.velX = 0
    flake.opacity = (Math.random() * 0.5) + 0.3
  }

  function init () {
    for (var i = 0; i < flakeCount; i++) {
      var x = Math.floor(Math.random() * canvas.width)
      var y = Math.floor(Math.random() * canvas.height)
      var size = (Math.random() * 3) + 2
      var speed = (Math.random() * 1) + 0.8
      var opacity = (Math.random() * 0.5) + 0.3

      flakes.push({
        speed: speed,
        velY: speed,
        velX: 0,
        x: x,
        y: y,
        size: size,
        stepSize: (Math.random()) / 30 * 0.9,
        step: 0,
        angle: 180,
        opacity: opacity
      })
    }

    draw()
  };
  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
  init()
}

export {
  snow
}
