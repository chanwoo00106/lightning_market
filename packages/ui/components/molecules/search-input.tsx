import { Search } from 'lucide-react';
import { Input } from '@repo/ui/components/ui/input';

export const SearchInput = () => {
  return (
    <div className="flex w-full items-center justify-between space-x-3 border border-gray-400 rounded-lg px-3">
      <Search />
      <Input
        className="flex-1 border-0 focus-visible:ring-0 shadow-none p-0 text-2xl"
        placeholder="상품 검색"
      />
    </div>
  );
};
