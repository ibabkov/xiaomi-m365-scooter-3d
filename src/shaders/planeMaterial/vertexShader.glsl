varying vec2 vUv;
uniform float uModY;

void main()
{
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  vUv = uv;
}
