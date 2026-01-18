import { FetchData } from './fetchData';
import './styles/post.css';
export default async function LoadPost(user, post, images) {
    const fetchData = new FetchData().fetchData;
    const comments = await fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
    const main = document.querySelector('main');
    main.innerHTML = `
                    <div id="blogHeader" style="background-image: url('${images[user.id - 1].download_url}'); 
                        background-size: cover;">
                        <h1>${user.name}</h1>
                        <p>${user.company.catchPhrase}
                        ${user.company.bs}</p>
                    </div>
                    <div id="bodyHolder">
                     <div id="comments">
                <h3>Comments</h3>
                <hr>
                <ul id="commentList"></ul>
            </div>
            <p id="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus quod facere. Dolorum
                tempore provident perspiciatis et mollitia, dolores aspernatur? Nisi libero perspiciatis ea quas
                voluptates laboriosam atque reprehenderit similique odit blanditiis optio exercitationem perferendis
                pariatur quibusdam eveniet, minus nemo laborum! Et accusamus, eos, sint quaerat consectetur molestiae
                incidunt totam aperiam officiis nobis nemo tenetur! Nam illo cumque atque sequi minima delectus, modi
                eaque minus consequuntur possimus, dolorem amet corrupti, deserunt assumenda quas praesentium maiores
                blanditiis aliquid ipsam itaque nihil voluptatum? Laboriosam, commodi soluta fuga porro obcaecati
                laborum amet explicabo. Nulla error vel aperiam a, quia eaque modi consequatur id? Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Unde voluptatibus sint dolore et quod eius provident esse odio
                tenetur saepe error exercitationem repudiandae deleniti, accusamus ipsa minima eveniet dolores
                accusantium? Sapiente, et consequatur. Voluptate quod tempore maiores quae perspiciatis quia inventore
                commodi officiis deserunt, sit ipsum accusamus consequatur quibusdam cumque, perferendis dolores! Nam
                fuga in vero sed quibusdam culpa repellendus quidem quia ab, totam nemo sit, quos rem? Voluptatibus quam
                aperiam cupiditate, modi accusantium corporis ad. Exercitationem voluptatibus assumenda itaque obcaecati
                iste, minima possimus beatae ipsam, labore reprehenderit iure, pariatur porro? Odio eos molestias
                consequatur molestiae ad minima placeat, enim praesentium eaque hic aut vitae dolore sequi tempora
                accusantium error ea laudantium at? Ducimus saepe nulla vitae facere dicta ipsum natus animi tempore
                velit cupiditate eaque ratione culpa incidunt voluptatibus assumenda placeat quo, ipsam quibusdam
                aperiam? Vel ea, praesentium quae consequatur aspernatur qui commodi quod ipsam deserunt, quaerat ullam
                tenetur laboriosam ex quo eaque? Unde tenetur est enim dolorum ea quisquam ad amet deserunt itaque iste
                cupiditate exercitationem quasi mollitia neque, placeat, officia inventore error explicabo maiores
                harum. Corporis atque explicabo quia accusamus, laboriosam doloribus? Quo quibusdam aliquam nihil
                dignissimos dolores recusandae assumenda minus, asperiores molestias facilis odio repellat sint? Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos cum atque ab quibusdam ullam quisquam
                modi ducimus expedita impedit vel, quas molestiae facere nostrum architecto ad aut culpa. Esse nulla
                fuga corporis animi sint! Quo reprehenderit quidem minus at iure nihil tempore nemo. Architecto
                aspernatur deserunt eveniet iusto fugit quisquam quae sapiente harum inventore! Alias delectus
                consequatur autem modi enim est blanditiis a, quo numquam ipsa nulla iure obcaecati exercitationem,
                tempore, dolores ullam perspiciatis eaque sint? Reprehenderit eius nulla eum consequatur cupiditate
                expedita at eos veniam, ullam maxime vitae amet incidunt voluptatibus illo veritatis illum voluptatem
                numquam est exercitationem aperiam necessitatibus ad libero officia? Illo, odio molestias mollitia
                accusamus optio adipisci fugiat nisi. Perferendis cum nihil modi blanditiis expedita libero, reiciendis,
                voluptatum at aliquid atque nemo, laborum earum illum deleniti debitis. Nesciunt, rem! Odit a non autem
                porro veniam error libero animi assumenda illo earum necessitatibus dolorum, accusantium repellendus
                nulla saepe vitae dolorem nemo sapiente ea cupiditate fugiat hic ipsam blanditiis qui! Accusantium
                consequatur quisquam distinctio debitis reprehenderit, hic animi deleniti libero ipsam natus impedit
                quasi omnis iusto labore autem voluptates esse voluptate sint recusandae est quaerat ab optio asperiores
                dignissimos? Aliquid, mollitia maiores! Est, ea harum blanditiis sequi, quas asperiores cupiditate
                quaerat perspiciatis accusantium a nesciunt corporis quia iste tempore quo quis ad delectus dicta animi
                similique quibusdam. Ea aliquam eveniet temporibus quas fugiat quaerat, numquam esse repellendus
                delectus eius odit molestiae inventore vitae ipsa deserunt sint veniam possimus velit expedita iste
                laboriosam iusto animi ex officia? Facilis qui corporis modi, vero sapiente doloremque delectus
                accusamus vel consequuntur aliquam nemo ducimus asperiores cupiditate illo impedit, obcaecati minus?
                Assumenda eaque aliquid ipsam eligendi iste ullam voluptas, reprehenderit natus tempore cumque
                recusandae accusamus totam. Iusto recusandae eaque voluptatibus natus nulla, accusamus ipsa at
                reiciendis? Deserunt adipisci officiis cumque iusto esse similique vitae facilis earum quae minima non
                rerum, dolorem suscipit ea reprehenderit dolorum. Laboriosam fugiat voluptates aliquid odit, soluta
                autem iusto et ea ipsa tempora ipsum, debitis ad impedit earum repudiandae! Cumque sint at cupiditate
                perferendis quasi, id esse laborum soluta adipisci amet, excepturi, explicabo est dicta? Cupiditate
                architecto placeat rerum dolorum, fuga earum pariatur officiis maiores impedit quam sapiente laboriosam
                voluptatibus rem cumque, assumenda nam praesentium distinctio aut voluptas tempore. Deleniti, veniam
                corrupti voluptas autem asperiores itaque, consequuntur repudiandae eum sapiente nisi nostrum. At odio
                quasi enim quae ducimus voluptates beatae eos corrupti dolores, perspiciatis ut quis facilis fuga esse
                assumenda a aspernatur accusamus, suscipit voluptatibus deserunt? Placeat ex voluptates vero, obcaecati
                libero minima magni! Maxime quidem nemo corporis eaque quae non delectus odio illum ab dolorum earum
                rerum voluptatibus doloribus, natus ad repudiandae aperiam, ut fuga nisi molestiae laborum quis? Rerum
                quos iure, consectetur natus eveniet facere. Impedit eaque tempore alias dolore aliquam, optio, iste
                sapiente eum illo repudiandae neque aperiam tempora veniam, exercitationem fugit? Cum, saepe amet! Ipsa
                laudantium veniam fuga. Ab quos officia omnis dignissimos quia, possimus inventore error quasi? Nulla
                officia velit, sequi, veniam nihil perferendis nesciunt, at quos error dolorum et. Provident,
                reiciendis. Maxime, nesciunt?</p>

                    </div>
                    `;
    const commentList = document.querySelector('#commentList');
    comments.forEach(comment => {
        const li = document.createElement('li');
        li.innerHTML = `
                                    <p id="body">${comment.body}</p>
                                    <p id="name">${comment.name} <span id="email">  ${comment.email}</span></p>
                                        `;
        commentList.append(li);
    });
}