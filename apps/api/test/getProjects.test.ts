import { expect, test } from 'vitest';
import { handler } from '../functions/projects/getProjects';

test('getProjects handler returns 200 with 4 real projects fallback', async () => {
  const result: any = await handler({} as any, {} as any, () => {});
  expect(result.statusCode).toBe(200);

  const body = JSON.parse(result.body);
  expect(body.success).toBe(true);
  expect(body.projects).toHaveLength(4);
  expect(body.projects[0].title).toBe('HomeMadeGrub');
  expect(body.projects[1].title).toBe('AWS Projects');
  expect(body.projects[2].title).toBe('AirBnB Database');
  expect(body.projects[3].title).toBe('Simple Shell');
});
