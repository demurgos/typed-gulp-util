import * as test from 'blue-tape';

import * as gulpUtil from 'gulp-util';

test('test', (t) => {
  t.plan(1);
  t.equal(gulpUtil.linefeed, '\n');
});
