export const FilterType = {
  all: "Tất cả",
  pending: "Chưa làm",
  inProgress: "Đang làm",
  completed: "Hoàn thành",
  cancelled: "Đã hủy",
};

export const options = [
  {
    value: "today",
    label: "Hôm nay",
  },
  {
    value: "week",
    label: "Tuần này",
  },
  {
    value: "month",
    label: "Tháng này",
  },
  {
    value: "year",
    label: "Năm này",
  },
  {
    value: "all",
    label: "Tất cả",
  },
];

export const visibleTaskLimit = 4;