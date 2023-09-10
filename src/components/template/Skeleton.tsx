import { Skeleton as NxUiSkeleton, SkeletonProps } from '@nextui-org/react';
import { FC } from 'react';

interface I_Props extends SkeletonProps {
  children?: React.ReactNode;
}

const Skeleton: FC<I_Props> = ({ children, ...rest }) => {
  return (
    <NxUiSkeleton
      classNames={{
        base: rest.isLoaded ? '!bg-transparent' : '!bg-zinc-50/10',
      }}
      {...rest}
    >
      {children}
    </NxUiSkeleton>
  );
};

export { Skeleton };
