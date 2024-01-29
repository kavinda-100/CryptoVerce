import React from "react";
import { Card, CardHeader, CardDescription } from "./ui/card";

export type TestimonialCardProps = {
  id?: number;
  name: string;
  description: string;
  icon: React.ReactNode
};

const TestimonialCard = ({
  name,
  description,
  icon
}: TestimonialCardProps) => {
  return (
    <Card className="flex flex-col justify-between p-3 hover:dark:brightness-150">
      <CardHeader>
        <div className="flex gap-2">
          {icon}
          <h3>{name}</h3>
        </div>
      </CardHeader>
      <CardDescription>
      {description}
      </CardDescription>
    </Card>
  );
};

export default TestimonialCard;
