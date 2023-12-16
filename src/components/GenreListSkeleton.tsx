import { SkeletonText, Skeleton, HStack } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <Skeleton height={50} width={50} borderRadius={10} />
      <SkeletonText width={"80px"} noOfLines={2} />
    </HStack>
  );
};

export default GenreListSkeleton;
