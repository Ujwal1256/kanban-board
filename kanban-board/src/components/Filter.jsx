const Filter = () => {
  const toggleLabel = (label) => {
    const params = new URLSearchParams(window.location.search);
    const current = params.get("labels")?.split(",") || [];

    let updated;
    if (current.includes(label)) {
      updated = current.filter((l) => l !== label);
    } else {
      updated = [...current, label];
    }

    params.set("labels", updated.join(","));
    window.history.pushState({}, "", "?" + params.toString());
    window.location.reload();
  };

  return (
    <div>
      <button onClick={() => toggleLabel("bug")}>Bug</button>
      <button onClick={() => toggleLabel("urgent")}>Urgent</button>
    </div>
  );
};

export default Filter;