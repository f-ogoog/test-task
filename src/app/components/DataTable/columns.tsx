import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';


export const columns = [
  {
    accessorKey: "madeBy",
    header: "MadeBy",
  },
  {
    accessorKey: "model",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Model
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    )
    },
  },
  {
    accessorKey: "year",
    header: "Year",
  },
]