import 'reflect-metadata';

export const Token = (
  target: any,
  propertyKey: string | symbol,
  parameterIndex: number,
): void => {

    console.log(target); //The object owning method called with this parameter
    console.log(propertyKey); //The method called with this parameter, i.e. the constructor
    console.log(parameterIndex); //The index of the parameter

    const args = Reflect.getMetadata('design:paramtypes', target);
    const updatedArgs = [];

    args.forEach(arg => {
      if (arg.name === 'Request') {
        updatedArgs.push(arg.header('Token'));
      } else {
        updatedArgs.push(arg);
      }
    });
    
    Reflect.defineMetadata('design:paramtypes', updatedArgs, target, propertyKey);
};