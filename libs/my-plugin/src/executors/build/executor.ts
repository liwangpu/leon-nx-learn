import { ExecutorContext } from '@nrwl/devkit';
import { BuildExecutorSchema } from './schema';

export default async function runExecutor(options: BuildExecutorSchema, context: ExecutorContext) {
  console.log('Executor ran for Build', options);
  // console.log('Executor ran for Build', context);

  return {
    success: true,
  };
}
