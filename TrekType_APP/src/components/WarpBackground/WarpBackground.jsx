import React, { useEffect, useRef } from "react";
import "./WarpBackground.scss"; // Add CSS file for styling

const WarpBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas, context, alpha;
    let cX, cY, tX, tY, mouseX, mouseY, density;
    let stars = [];
    let cameraDepth = 0;
    let enterWarp, warpStartDepth, warpTime, velocity;
    const cameraTrick = 1;
    const starCount = 1024;
    let initVelocity = -1.0;
    let termVelocity = -10.0;
    const topleft = 0;
    const trackMouse = 1;
    const focalPoint = 256;
    const sparcity = 1.0;
    const tailLength = 20;

    const modulo = (a) => {
      const b = 1024;
      return a - b * Math.floor(a / b);
    };

    const modulo2 = (a, b) => {
      return a - b * Math.floor(a / b);
    };

    class Star {
      constructor(index) {
        this.x = (Math.random() * 2048 - 1024) * sparcity;
        this.y = (Math.random() * 2048 - 1024) * sparcity;
        this.z = (starCount - 1 - index) / density;

        if (topleft === 1) {
          this.x = this.x + 1024;
          this.y = this.y + 1024;
        }
      }

      move() {
        this.z = modulo(this.z + velocity);
      }

      draw() {
        const depth = focalPoint / (modulo(this.z + cameraDepth) + 1);
        const x = this.x * depth + cX;
        const y = this.y * depth + cY;
        const sz = 5 * depth;

        context.beginPath();
        context.rect(x, y, sz, sz);
        context.fillStyle = "white";
        context.fill();
        context.lineWidth = 0;
        context.strokeStyle = "black";
        context.stroke();
      }

      warpline() {
        let depth = modulo(this.z + cameraDepth) + 1;
        let depthStart = modulo(this.z + warpStartDepth) + 1;
        if (depth > depthStart && termVelocity < 0) depth = 1;
        if (depth < depthStart && termVelocity > 0) depthStart = 1;

        const invDepth = focalPoint / depth;
        const invDepthStart = focalPoint / depthStart;

        const x = this.x * invDepth + cX;
        const y = this.y * invDepth + cY;
        const sz = 5 * invDepth;

        const wx = this.x * invDepthStart + cX;
        const wy = this.y * invDepthStart + cY;
        const wsz = 5 * invDepthStart;

        const top = this.y < 0 ? sz : 0;
        const left = this.x < 0 ? sz : 0;
        const alpha = (sz / 5.0 + 0.1) * 0.7;

        context.beginPath();
        context.moveTo(wx, wy);
        context.lineTo(x + sz, y + top);
        context.lineTo(x, y + top);
        context.moveTo(wx, wy);
        context.lineTo(x + left, y + sz);
        context.lineTo(x + left, y);
        context.closePath();
        context.fillStyle =
          termVelocity < 0
            ? `rgba(64,128,192,${alpha})`
            : `rgba(192,64,32,${alpha})`;
        context.fill();
      }
    }

    const init = () => {
      canvas = canvasRef.current;
      context = canvas.getContext("2d");
      resize();
      canvas.addEventListener("mousemove", mousemove);
      canvas.addEventListener("click", mouseclick);
      window.addEventListener("resize", resize);

      tX = cX = canvas.width / 2;
      tY = cY = canvas.height / 4;

      if (topleft === 1) {
        cX = 0;
        cY = 0;
      }

      density = starCount / 1024;
      for (let i = 0; i < starCount; i++) {
        stars[i] = new Star(i);
      }

      alpha = 6.0;
      enterWarp = false;
      velocity = initVelocity;
    };

    const animate = () => {
      move();
      render();
      requestAnimationFrame(animate);
    };

    const move = () => {
      if (enterWarp) {
        velocity *= 1.02;
        if (velocity < termVelocity && termVelocity < 0)
          velocity = termVelocity;
        if (velocity > termVelocity && termVelocity > 0)
          velocity = termVelocity;
        warpTime += 1;
        if (warpTime > 140) enterWarp = false;
        if (warpTime > tailLength)
          warpStartDepth = modulo(warpStartDepth + velocity);
        if (warpTime > 130)
          warpStartDepth = modulo(
            warpStartDepth + (cameraDepth - warpStartDepth) * 0.3
          );
      } else {
        const dv = velocity - initVelocity;
        velocity -= dv * 0.01;
      }

      if (cameraTrick === 0) {
        for (let i = 0; i < stars.length; i++) {
          stars[i].move();
        }
      } else {
        cameraDepth = modulo(cameraDepth + velocity);
      }

      let dx = tX - cX;
      let dy = tY - cY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist !== 0) {
        dx /= dist;
        dy /= dist;
      }
    };

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const index =
          cameraTrick === 1
            ? modulo2(i + 1 + Math.floor(cameraDepth) * density, stars.length)
            : i;
        if (enterWarp && termVelocity <= 0) stars[index].warpline();
        stars[index].draw();
        if (enterWarp && termVelocity > 0) stars[index].warpline();
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const mousemove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;

      if (trackMouse) {
        tX = mouseX;
        tY = mouseY;
        if (termVelocity > 0) {
          tX = canvas.width - tX;
          tY = canvas.height - tY;
        }
      }
    };

    const mouseclick = () => {
      tX = mouseX;
      tY = mouseY;
      if (termVelocity > 0) {
        tX = canvas.width - tX;
        tY = canvas.height - tY;
      }

      if (!enterWarp) {
        enterWarp = true;
        warpStartDepth = cameraDepth;
        warpTime = 0;
      }
    };

    init();
    animate();

    return () => {
      canvas.removeEventListener("mousemove", mousemove);
      canvas.removeEventListener("click", mouseclick);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="warp-background"></canvas>;
};

export default WarpBackground;
