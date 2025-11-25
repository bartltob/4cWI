import List from "./components/filter/list.tsx";
import { useState } from "react";

export default function ToDoFilter() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <div className={"flex items-center justify-center"}>
        <input
          type="text"
          placeholder="search"
          className={"text-center mt-5"}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
        />
      </div>
      <List search={searchValue} />
    </div>
  );
}
