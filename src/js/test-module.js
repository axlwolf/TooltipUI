export const TooltipUI = (() => {
  console.log("TooltipUI");

  const $tooltip = document.querySelector(".tooltip");
  const $navElements = document.querySelectorAll(".menu ul li");

  const init = () => {
    console.log("Init app");
    eventHandlers();
  };

  const tooltipTemplate = `
    <div class="tooltip">
      <p></p>
    </div>
  `;

  const eventHandlers = () => {
    $navElements.forEach((el) => {
      el.addEventListener("mouseover", (ev) => {
        const target = ev.target;
        showTooltip(target, "bottom"); // Aquí puedes cambiar la posición a 'top', 'bottom', 'right' o 'left'
      });
      el.addEventListener("mouseout", () => {
        hideTooltip();
      });
    });
  };
  // TODO: implement properly this function
  const showTooltip = (target, position) => {
    //target.appendChild(tooltipTemplate);
    // const tooltipText = target.dataset.tooltip;
    // const tooltipPosition = target.dataset.position || position;
    // $tooltip.querySelector("p").textContent = tooltipText;
    // $tooltip.style.display = "block";
    // // Obtener las dimensiones del target y del tooltip
    // const rect = target.getBoundingClientRect();
    // const tooltipRect = $tooltip.getBoundingClientRect();
    // console.log({ rect, tooltipRect });
    // let top, left;
    // // switch (tooltipPosition) {
    // //   case "top":
    // //     top = rect.top - tooltipRect.height - 10;
    // //     left = rect.left + rect.width / 2 - tooltipRect.width / 2;
    // //     break;
    // //   case "bottom":
    // //     top = rect.bottom + 10;
    // //     left = rect.left + rect.width / 2 - tooltipRect.width / 2;
    // //     break;
    // //   case "right":
    // //     top = rect.top + rect.height / 2 - tooltipRect.height / 2;
    // //     left = rect.right + 10;
    // //     break;
    // //   case "left":
    // //     top = rect.top + rect.height / 2 - tooltipRect.height / 2;
    // //     left = rect.left - tooltipRect.width - 10;
    // //     break;
    // //   default:
    // //     top = rect.bottom + 10;
    // //     left = rect.left + rect.width / 2 - tooltipRect.width / 2;
    // // }
    // $tooltip.style.top = `${top}px`;
    // $tooltip.style.left = `${left}px`;
    // $tooltip.classList.add(tooltipPosition);
  };

  const hideTooltip = () => {
    $tooltip.style.display = "none";
    $tooltip.classList.remove("top", "bottom", "right", "left");
  };

  return {
    init,
  };
})();
