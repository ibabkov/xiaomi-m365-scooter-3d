varying vec2 vUv;
uniform float uMod;

void main()
{
    float strength = distance(vUv, vec2(0.5)) * 10.0 / uMod;

    // Final color
    vec4 blackColor = vec4(0.0, 0.0, 0.0, 1.0);
    vec4 transparentColor = vec4(0.0, 0.0, 0.0, 0.0);
    vec4 mixedColor = mix(blackColor, transparentColor, strength);

    gl_FragColor = vec4(mixedColor);
}
