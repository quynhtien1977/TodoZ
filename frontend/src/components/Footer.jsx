import React from "react";

const Footer = ({
  completedTasksCount = 0,
  pendingTasksCount = 0,
  inProcessingTasksCount = 0,
}) => {
  return (
    <>
      {completedTasksCount + pendingTasksCount + inProcessingTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                Tuyệt vời! Bạn đã hoàn thành {completedTasksCount} việc.
                {pendingTasksCount > 0 &&
                  ` ,còn ${pendingTasksCount} việc đang chờ `}
                {inProcessingTasksCount > 0 &&
                  `và ${inProcessingTasksCount} việc đang làm nữa thôi. `}
                Cố lên!
              </>
            )}

            {completedTasksCount === 0 && pendingTasksCount > 0 && (
              <>
                Bạn có {pendingTasksCount} nhiệm vụ đang chờ. Bắt đầu làm thôi!
                {inProcessingTasksCount > 0 &&
                  ` Bạn sắp làm xong ${inProcessingTasksCount} nhiệm vụ nữa. Cố lên nhé!`}
              </>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
