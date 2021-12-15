export const snow = () => {

  window.onload = function () {
    let snowflake = document.querySelector('.snowflake');
    let mySparticles = new Sparticles(snowflake, options)
  }


  let colors = {
    color1: "rgba(255,255,255,1)",
    color2: "rgba(222,184,142,1)",
    color3: "rgba(232,248,255,1)",
    color4: "rgba(135,143,145,1)"
  };


  let options = {
    alphaSpeed: 10,
    alphaVariance: 1,
    color: [colors.color1, colors.color2, colors.color3, colors.color4],
    composition: "source-over",
    count: 350,
    direction: 161,
    float: 0.75,
    glow: 0,
    imageUrl: [
      "./img/snow-1.svg",
      "./img/snow-2.svg",
      "./img/snow-3.svg",
      "./img/snow-4.svg",
      "./img/snow-5.svg",
      "./img/snow-6.svg"
    ],
    maxAlpha: 2,
    maxSize: 22,
    minAlpha: -0.2,
    minSize: 1,
    parallax: 1.75,
    rotation: 0.5,
    shape: "image",
    speed: 30,
    style: "fill",
    twinkle: false,
    xVariance: 5,
    yVariance: 0,
  };
}


