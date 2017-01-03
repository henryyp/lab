
varying vec2 vUv;
uniform sampler2D oldPositions;
uniform sampler2D positions;
uniform sampler2D tNoise;
uniform float periodic;
uniform float timer;

uniform vec3 attractor0;
uniform vec3 attractor1;

vec3 texPosition( sampler2D tN ) {
  return  texture2D( tN, vUv ).rgb;
}

// var acceleration = function(a, b){
//     var direction = a.sub(b);
//     var length = direction.length();
//     var normal = direction.normalized();
//     return normal.mul(G/Math.pow(length, 2));
// };
//
//         var position = body.position.mul(2);
        // position.isub(body.previous);
        // position.iadd(acc);
vec3 acceleration(vec3 a, vec3 b, delta) {
  vec3 direction = a - b;
  // float len = length( direction );
  vec3 nor = normalize( direction );
  return nor * 1500.0 / ( delta * delta );
}

void main() {

  // vec3 pos = texPosition( tNoise ) * 200.0;
  // vec3 acc = acceleration( attractor0,  )
  // vec3 des = attractor1 + mix(pos, vec3(0.0, 0.0, 0.0), timer);

  vec3 bPos = texPosition( positions );
  vec3 bPrev = texPosition( oldPositions );
  vec3 acc = acceleration( attractor1, bPos );

  vec3 pos = ( bPos * 2.0 ) - bPrev + acc;


  // vect des = mix(attractor1, attractor0, timer);
  //
  // vec3 prevPos = texPosition( positions );


  // vec3 p = mix( attractor0, des, timer );
  gl_FragColor = vec4( pos, 1. );

}
