import 'reflect-metadata';

export const Token = (target, key, descriptor) => {
    const args =
      Reflect.getMetadata('design:paramtypes', target, key) || {};
    console.log(args);
    return target;
};