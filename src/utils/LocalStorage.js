const LocalStorageSave = () => {
  const inputs = document.querySelectorAll('input')
  for (let inp of inputs) {
    localStorage.setItem(inp.id, inp.value);
  }

  // For some reason, materlize-ui add an hidden texaera,
  // sp te query has to be more precise...
  const ta_justification = document.querySelectorAll('textarea[id$="_justification"]')
  for (let ta of ta_justification) {
    localStorage.setItem(ta.id, ta.value);
  }

  const ta_remark = document.getElementById('EvaluationComment_comment')
  localStorage.setItem(ta_remark.id, ta_remark.value);

  console.log("Something has been saved... maybe");
}

const LocalStorageLoad = () => {
  const inputs = document.querySelectorAll('input')
  for (let inp of inputs) {
    let curr_val = localStorage.getItem(inp.id);
    document.getElementById(inp.id).value = curr_val;
  }
  const textarea = document.querySelectorAll('textarea[id$="_justification"]')
  for (let ta of textarea) {
    let curr_val = localStorage.getItem(ta.id);
    document.getElementById(ta.id).value = curr_val;
  }

  document.getElementById('EvaluationComment_comment').value = localStorage.getItem('EvaluationComment_comment');
  console.log("Something has been loaded... maybe");
}

const LocalStorageClear = () => {
  const inputs = document.querySelectorAll('input')
  for (let inp of inputs) {
    document.getElementById(inp.id).value = '';
  }
  const textarea = document.querySelectorAll('textarea[id$="_justification"]')
  for (let ta of textarea) {
    document.getElementById(ta.id).value = '';
  }
  localStorage.clear();
  console.log("Something has been cleared... maybe");
}

export {LocalStorageSave, LocalStorageLoad, LocalStorageClear};
