jQuery(() => {
  document.body.classList.add("binarymuse-theme");

  const css = `
    body.binarymuse-theme .known-list#center_pane_container {
      max-width: initial;
    }

    body.binarymuse-theme .itemRowView-taskMetadata .itemRowView-potToken {
      max-width: 150px;
    }
  `

  const styleEl = document.createElement("style");
  styleEl.type = "text/css";
  styleEl.setAttribute("data-added-by", "dot-js");
  styleEl.appendChild(document.createTextNode(css));

  document.body.appendChild(styleEl);
});
