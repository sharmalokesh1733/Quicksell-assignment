import Card from "../card/Card";
import "./list.css";

const List = ({ data, users, title, icon, color, grouping, ordering }) => {
  let sortedData = data;

  if (ordering === "Priority") {
    sortedData = data.slice().sort((a, b) => a.priority - b.priority);
  }

  if (ordering === "Title") {
    sortedData = data.slice().sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="list">
      <div className="head">
        <div className="cont special">
          <span class="material-symbols-outlined icon" style={{ color: color }}>
            {icon}
          </span>
          &nbsp; {title} &nbsp;&nbsp;&nbsp;{data.length}
        </div>
        <div>
          <span class="material-symbols-outlined icon">add</span>
          <span class="material-symbols-outlined icon">more_horiz</span>
        </div>
      </div>

      <ul className="llist">
        {sortedData.map((item) => (
          <Card item={item} users={users} />
        ))}
      </ul>
    </div>
  );
};

export default List;
