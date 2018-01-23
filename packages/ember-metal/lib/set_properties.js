import { set } from './property_set';
/**
 @module @ember/object
*/
/**
  Set a list of properties on an object.

  ```javascript
  let anObject = Ember.Object.create();

  anObject.setProperties({
    firstName: 'Stanley',
    lastName: 'Stuart',
    age: 21
  });
  ```

  @method setProperties
  @static
  @for @ember/object
  @param obj
  @param {Object} properties
  @return properties
  @public
*/
export default function setProperties(obj, properties) {
  if (properties === null || typeof properties !== 'object') { return properties; }
  let props = Object.keys(properties);
  let propertyName;

  for (let i = 0; i < props.length; i++) {
    propertyName = props[i];

    set(obj, propertyName, properties[propertyName]);
  }
  return properties;
}
