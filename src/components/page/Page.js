import React from "react";
import "./page.css";
import List from "../list/List";

const Page = ({ grouping, ordering, data }) => {
  let sortedData = [];

  if (grouping === "Status") {
    sortedData["Backlog"] = data.tickets.filter(
      (item) => item.status === "Backlog"
    );

    sortedData["Todo"] = data.tickets.filter((item) => item.status === "Todo");
    sortedData["In Progress"] = data.tickets.filter(
      (item) => item.status === "In progress"
    );
    sortedData["Done"] = data.tickets.filter((item) => item.status === "Done");
    sortedData["Canceled"] = data.tickets.filter(
      (item) => item.status === "Canceled"
    );
  }

  if (grouping === "User") {
    for (let i = 0; i < data.users.length; i++) {
      sortedData[data.users[i].name] = data.tickets.filter(
        (item) => item.userId === data.users[i].id
      );
    }
  }

  if (grouping === "Priority") {
    sortedData["No Priority"] = data.tickets.filter(
      (item) => item.priority === 0
    );
    sortedData["Urgent"] = data.tickets.filter((item) => item.priority === 4);
    sortedData["High"] = data.tickets.filter((item) => item.priority === 3);
    sortedData["Medium"] = data.tickets.filter((item) => item.priority === 2);
    sortedData["Low"] = data.tickets.filter((item) => item.priority === 1);
  }

  return (
    <div className="page">
      {grouping === "Status" ? (
        <>
          <List
            data={sortedData["Backlog"]}
            users={data.users}
            title="Backlog"
            icon="settings_backup_restore"
            color="rgb(89, 89, 89)"
            ordering={ordering}
          />
          <List
            data={sortedData["Todo"]}
            users={data.users}
            title="Todo"
            icon="circle"
            color="rgb(89, 89, 89)"
            ordering={ordering}
          />
          <List
            data={sortedData["In Progress"]}
            users={data.users}
            title="In Progress"
            icon="clock_loader_40"
            color="rgb(205, 35, 35)"
            ordering={ordering}
          />
          <List
            data={sortedData["Done"]}
            users={data.users}
            title="Done"
            icon="check_circle"
            color="rgb(26, 128, 168)"
            ordering={ordering}
          />
          <List
            data={sortedData["Canceled"]}
            users={data.users}
            title="Canceled"
            icon="cancel"
            color="rgb(89, 89, 89)"
            ordering={ordering}
          />
        </>
      ) : (
        <></>
      )}
      {grouping === "User" ? (
        <>
          <List
            data={sortedData[data.users[0].name]}
            title={data.users[0].name}
            users={data.users}
            icon="account_circle"
            color="rgb(89, 89, 89)"
            ordering={ordering}
          />
          <List
            data={sortedData[data.users[1].name]}
            title={data.users[1].name}
            users={data.users}
            icon="account_circle"
            color="rgb(89, 89, 89)"
            ordering={ordering}
          />
          <List
            data={sortedData[data.users[2].name]}
            title={data.users[2].name}
            users={data.users}
            icon="account_circle"
            color="rgb(89, 89, 89)"
            ordering={ordering}
          />
          <List
            data={sortedData[data.users[3].name]}
            title={data.users[3].name}
            users={data.users}
            icon="account_circle"
            color="rgb(89, 89, 89)"
            ordering={ordering}
          />
          <List
            data={sortedData[data.users[4].name]}
            title={data.users[4].name}
            users={data.users}
            icon="account_circle"
            color="rgb(89, 89, 89)"
            ordering={ordering}
          />
        </>
      ) : (
        <></>
      )}
      {grouping === "Priority" ? (
        <>
          <List
            data={sortedData["No Priority"]}
            users={data.users}
            title="No Priority"
            icon="more_horiz"
            color="rgb(89, 89, 89)"
            ordering={ordering}
          />
          <List
            data={sortedData["Urgent"]}
            users={data.users}
            title="Urgent"
            icon="warning"
            color="orange"
            ordering={ordering}
          />
          <List
            data={sortedData["High"]}
            users={data.users}
            title="High"
            icon="signal_cellular_alt"
            color="rgb(89, 89, 89)"
            ordering={ordering}
          />
          <List
            data={sortedData["Medium"]}
            users={data.users}
            title="Medium"
            icon="signal_cellular_alt_2_bar"
            color="rgb(89, 89, 89)"
            ordering={ordering}
          />
          <List
            data={sortedData["Low"]}
            users={data.users}
            title="Low"
            icon="signal_cellular_alt_1_bar"
            color="rgb(89, 89, 89)"
            ordering={ordering}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Page;
