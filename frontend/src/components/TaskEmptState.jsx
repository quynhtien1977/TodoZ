import React from "react";
import { Card } from "./ui/card";
import { Circle } from "lucide-react";

const TaskEmptState = ({ filter }) => {
  return (
    <Card className="p-8 text-center border-0 bg-gradient-card shadow-custom-md">
      <div className="space-y-3">
        <Circle className="mx-auto size-12 text-muted-foreground" />
        <div>
          <h3 className="font-medium text-foreground">
            {filter === "completed"
              ? "Chưa có nhiệm vụ hoàn thành."
              : filter === "pending"
              ? "Chưa có nhiệm vụ mới tạo."
              : filter === "inProgress"
              ? "Chưa có nhiệm vụ đang làm."
              : filter === "cancelled"
              ? "Chưa có nhiệm vụ bị hủy."
              : "Chưa có nhiệm vụ."}
          </h3>

          <p className="text-sm text-muted-foreground">
            {filter === "completed"
              ? "Hãy hoàn thành nhiệm vụ đang làm đi!"
              : filter === "pending"
              ? "Hãy tạo 1 nhiệm vụ mới đi!"
              : filter === "inProgress"
              ? "Hãy bắt đầu làm nhiệm vụ đi!"
              : filter === "cancelled"
              ? "Hehe, chưa bỏ cuộc nhiệm vụ nào cả!"
              : "Thêm nhiệm vụ đầu tiên vào để bắt đầu!"}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TaskEmptState;
