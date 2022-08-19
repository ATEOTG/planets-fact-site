function Menu(props) {
  return (
    <svg
      onClick={props.onMenuClick}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="17"
    >
      <g fill={props.menuValid ? "#979797" : "#FFF"} fill-rule="evenodd">
        <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
      </g>
    </svg>
  );
}

export default Menu;
