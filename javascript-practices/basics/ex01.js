console.log("===== [01] 기본타입, primitive type");
var u;
var i = 10;
var s = "hello world";
var b = "true";

console.log("u:" + typeof(u) + ":" + u);
console.log("i:" + typeof(i) + ":" + i);
console.log("s:" + typeof(s) + ":" + s);
console.log("b:" + typeof(b) + ":" + b);

console.log("===== [02] 객체타입, object");
var i = new Number(10);
var s = new String("hello world");
var b = new Boolean(false);
var o = {};
var a = [];
var n = null;

console.log("i:" + typeof(i) + ":" + i);
console.log("s:" + typeof(s) + ":" + s);
console.log("b:" + typeof(b) + ":" + b);
console.log("o:" + typeof(o) + ":" + o);
console.log("a:" + typeof(a) + ":" + a);
console.log("n:" + typeof(n) + ":" + n);

console.log("===== [02.02] 객체타입, funciton");
var f1 = function() {
}
function f2() {
}
var f3 = new Function();

console.log("f1:" + typeof(f1));
console.log("f2:" + typeof(f2));
console.log("f3:" + typeof(f3));

console.log("===== [03] 기본 타입과 유사객체");
var b1 = true;               // new Boolean(true) x
var b2 = new Boolean(true);

console.log(b1.valueOf());   // new Boolean(b1).valueOf() o
console.log(b2.valueOf());

