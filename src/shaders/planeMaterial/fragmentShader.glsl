varying vec2 vUv;
uniform float uModY;

void main()
{
  float strength = step(0.95, mod(vUv.x * 200.0, 1.0));
  strength *= step(0.95, mod((vUv.y + uModY) * 200.0, 1.0));
  float dampingStrength = smoothstep(0.0, 1.0, distance(vUv, vec2(0.5)) * 2.5);


  // Final color
  vec4 redColor = vec4(0.7, 0.0, 0.0, 0.8);
  vec4 transparentColor = vec4(0.0, 0.0, 0.0, 0.0);
  vec4 mixedColor = mix(transparentColor, redColor, strength);
  vec4 dampedColor = mix(mixedColor, transparentColor, dampingStrength);

  gl_FragColor = vec4(dampedColor);
}
