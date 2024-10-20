import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";

const AppliedJobs = () => {
  const alljobs = [1, 2, 34, 4];
  return (
    <div>
      <Table>
        <TableCaption>A list of your recently applied jobs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Job role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alljobs.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">Today</TableCell>
              <TableCell>SWE</TableCell>
              <TableCell>Linkedin</TableCell>
              <TableCell className="text-right">
                {" "}
                <Badge variant="outline">Pending</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobs;
