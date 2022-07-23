import style from "./BarraNav.module.css";
function BarraNav({ opcoes }) {
  return (
    <div className={style.barraNav}>
      <nav>
        <ul>
          {opcoes.map((opcao, i) => (
            <li key={i}>
              <a href="./">{opcao}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default BarraNav;
