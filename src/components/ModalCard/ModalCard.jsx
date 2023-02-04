import { flattenDeep, toArray } from "lodash";

export default function ModalCard({ user }) {
  const arrUserDate = toArray(user);
  const arrKey = [];

  let i = 0;
  for (let el in user) {
    if (!Array.isArray(arrUserDate[i])) {
      arrKey.push(el);
      i += 1;
    } else {
      arrKey.push(el);
      //   arrUserDate[i].map((ell) => {
      //       if (typeof ell === "object") console.log(ell, toArray(ell));
      //       arrUserDate[i].push('name: ', ell[1])
      //   });
      arrUserDate[i] = arrUserDate[i].join(", ");
    }
  }

  return (
    <ul>
      {arrKey.map((el, idx) => {
        return (
          <li key={idx}>
            <p>
              {el}: {arrUserDate[idx]}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
