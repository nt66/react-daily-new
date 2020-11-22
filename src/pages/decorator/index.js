// decorator 示例
import React, { useEffect } from 'react';

@annotation
class MyClass {
  constructor() {
    this.a = 1
    this.b = 2
  }

  @readonly
  name() {
    return `${this.a}~~${this.b}`
  }
}

function readonly(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

function annotation(target) {
  // target.annotated = true; // 静态方法
  target.prototype.annotated = true; // 原型方法
}


const decorator = () => {
  const myClass = new MyClass()
  console.log('1111', myClass.annotated);
  console.log('2222', myClass.name());

  // cannot assign to read only property name
  myClass.name = function () {
    return '王老五'
  }

  return (
    <>
      <div>
        <h2>装饰器示例</h2>
      </div>
    </>
  )
}

export default decorator