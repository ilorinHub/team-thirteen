import PersonSvg from "../assets/svg/person.svg";
import MilestonesSvg from "../assets/svg/bar_chart.svg";
import TeamsSvg from "../assets/svg/groups.svg";
import StatusSvg from "../assets/svg/status.svg";
import LabelSvg from "../assets/svg/label.svg";

export const FilterData = {
  mid: [
    {
      label: "Owners",
      icon: PersonSvg.src,
      options: [
        { option: "All", value: "All" },
        { option: "option2", value: "option2" },
        { option: "option3", value: "option3" },
      ],
    },
    {
      label: "Milestones",
      icon: MilestonesSvg.src,
      options: [
        { option: "All", value: "All" },
        { option: "option2", value: "option2" },
        { option: "option3", value: "option3" },
      ],
    },
    {
      label: "Teams",
      icon: TeamsSvg.src,
      options: [
        { option: "All", value: "All" },
        { option: "option2", value: "option2" },
        { option: "option3", value: "option3" },
      ],
    },
    {
      label: "Status",
      icon: StatusSvg.src,
      options: [
        { option: "All", value: "All" },
        { option: "option2", value: "option2" },
        { option: "option3", value: "option3" },
      ],
    },
    {
      label: "Label",
      icon: LabelSvg.src,
      options: [
        { option: "All", value: "All" },
        { option: "option2", value: "option2" },
        { option: "option3", value: "option3" },
      ],
    },
  ],
  groupBy: {
    label: "Group By",
    options: [
      { option: "All", value: "All" },
      { option: "option2", value: "option2" },
      { option: "option3", value: "option3" },
      { option: "option4", value: "option4" },
      { option: "option5", value: "option5" },
    ],
  },
};
