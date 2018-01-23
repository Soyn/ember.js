import {
  get,
  computed,
  defineProperty,
  propertyDidChange,
  addObserver
} from '..';
import { moduleFor, AbstractTestCase } from 'internal-test-helpers';

/*
  This test file is designed to capture performance regressions related to
  deferred computation. Things like run loops, computed properties, and bindings
  should run the minimum amount of times to achieve best performance, so any
  bugs that cause them to get evaluated more than necessary should be put here.
*/

moduleFor('Computed Properties - Number of times evaluated', class extends AbstractTestCase {
  ['@test computed properties are not executed if they are the last segment of an observer chain pain'](assert) {
    let foo = { bar: { baz: { } } };

    let count = 0;

    defineProperty(foo.bar.baz, 'bam', computed(function() {
      count++;
    }));

    addObserver(foo, 'bar.baz.bam', function() {});

    propertyDidChange(get(foo, 'bar.baz'), 'bam');

    assert.equal(count, 0, 'should not have recomputed property');
  }
});

