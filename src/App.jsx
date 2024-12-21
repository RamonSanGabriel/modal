import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import { createPortal } from 'react-dom';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = (value) => {
    setShowModal(false);
    setMessage(value);
  };

  return (
    <div>
      {message === '' ? (
        <p>No button was clicked</p>
      ) : (
        <p>
          You clicked the <strong>{message}</strong> button{' '}
        </p>
      )}
      {showModal ? (
        createPortal(
          <Modal
            onClose={handleCloseModal}
            onSubmit={handleCloseModal}
            onCancel={handleCloseModal}
            showModal={showModal}
          />,
          document.body
        )
      ) : (
        <button className="show-modal-btn" onClick={handleShowModal}>
          Show Modal
        </button>
      )}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas
        illo nostrum consectetur sit. Facilis sit libero, ipsam deserunt fuga
        voluptatum! Laborum laudantium eaque maiores debitis deserunt.
        Consequatur vero illo quae explicabo soluta est nihil rem amet saepe
        laboriosam totam quis blanditiis id nulla, ad aliquam doloremque ex.
        Recusandae officiis iure hic voluptatibus quibusdam reiciendis debitis,
        tempora libero tempore dolores maiores harum nostrum rerum sed vero ad
        adipisci laboriosam ab magnam laborum? Cumque deleniti beatae provident
        voluptatibus natus sunt magnam laudantium error quidem tempore ad,
        quaerat esse qui, voluptates quam soluta repellat consequatur sed totam
        vero! Maiores illo nesciunt nihil, amet omnis nulla molestiae autem
        dolorem quaerat, porro architecto? Voluptatibus ab ad temporibus
        perspiciatis blanditiis impedit asperiores reprehenderit doloremque! Sit
        eos vero eum. Eum cumque quis qui magnam vero id molestiae, natus nemo!
        Praesentium quasi eaque consequuntur aspernatur, tempora iusto
        accusantium nulla accusamus commodi quisquam necessitatibus quod sint
        eius magni deleniti quo officiis maiores quas. Nobis necessitatibus
        adipisci molestias. Beatae blanditiis vitae, sunt quo aperiam nulla
        dolorum explicabo quis assumenda nemo eos ea perspiciatis voluptatum
        deleniti nihil odit cupiditate? Deleniti natus quo aut maiores modi?
        Possimus vel magnam optio assumenda officia nulla accusamus. Voluptate
        cum non ipsam quam architecto nisi! Dicta doloremque fugiat
        necessitatibus blanditiis, ex nostrum odit eius culpa? Suscipit
        excepturi necessitatibus corporis mollitia facere, earum sed. Suscipit
        quis laboriosam ex voluptatibus, aspernatur earum asperiores optio minus
        maiores, dolorem atque autem, doloribus ducimus eum. Nam quis culpa
        pariatur accusantium est delectus, neque ab sapiente, rerum nihil
        facilis adipisci numquam? Eaque quae aliquam explicabo ea omnis.
        Eveniet, asperiores magni exercitationem nulla dignissimos adipisci.
        Nulla iure error repudiandae quod recusandae doloribus incidunt delectus
        facere accusamus at? Excepturi repellendus cum tempore sed animi vitae
        impedit nulla adipisci. Voluptate nemo ipsam quaerat amet tempore dolore
        dignissimos consectetur magnam, ratione tenetur cumque. Nihil suscipit
        cupiditate dolore fuga sequi quasi sapiente quam, veniam omnis facere
        sed nostrum dignissimos? Quaerat reprehenderit asperiores natus suscipit
        alias consequatur eligendi in quasi nemo ad aut officiis magni
        consectetur accusamus voluptas fugit voluptate rem veniam maiores omnis
        vero ut, delectus minima commodi. Tempore assumenda ipsa magnam adipisci
        quam. Cumque totam perspiciatis saepe, voluptatem culpa qui reiciendis
        deleniti asperiores reprehenderit esse quam nulla voluptates ut placeat
        id doloremque harum rerum! Quos, aliquid alias! In inventore velit totam
        ipsum, sit quos, aperiam veniam non repudiandae porro perspiciatis! Sed
        atque quam quae deserunt sunt corporis libero molestias. Eum doloremque
        dicta nesciunt eius earum animi placeat vel magnam natus nemo tenetur
        corporis ad asperiores magni sit fugiat similique, suscipit rem! Magnam
        obcaecati accusamus veniam doloribus a dolores est voluptatem ullam quod
        officiis explicabo eius, at autem incidunt rem. Deleniti libero debitis
        rem veniam exercitationem expedita laborum voluptate adipisci quam sequi
        iure suscipit culpa dolorum harum cum, tempore ea distinctio doloribus
        magnam ipsum nam officiis vel quos velit! Quaerat, inventore aspernatur.
        Eveniet veniam reprehenderit aut suscipit nesciunt voluptas maxime quod
        omnis itaque distinctio doloremque eum molestiae explicabo maiores
        tenetur ratione minus animi magnam debitis accusamus, incidunt at. Quod
        placeat aliquam molestiae ipsa quisquam officiis autem illo deleniti
        adipisci corrupti magnam debitis tempore iure exercitationem ad tempora
        repudiandae, rerum, suscipit in. Explicabo nostrum unde quibusdam,
        distinctio odit eius ipsam sed sit vero tenetur totam earum quae illo
        recusandae ratione sint porro numquam non voluptate, dicta cumque
        itaque! Mollitia eos vel dolorum illum consequuntur iste, maxime
        assumenda fugit at, numquam voluptatibus sint sequi nostrum amet ab
        cumque quae, deserunt perspiciatis neque quam magnam. Non suscipit
        laborum aliquid sunt ex voluptatum doloribus consectetur id iusto
        veritatis optio esse soluta quam nostrum labore, eaque aliquam iste
        quisquam ab. Quas est optio ad veritatis cupiditate harum adipisci
        voluptatum, nihil at dolorum beatae porro, aperiam amet vel tempore
        possimus voluptatem provident? Ipsum, voluptates, dolore ut dicta aut
        commodi sapiente natus, odit repellat amet similique praesentium vel
        expedita eos totam iusto ipsa tenetur dolorem quos quas autem ex vitae?
        Qui velit minus odit unde veniam, eaque exercitationem illum rem ratione
        officia totam perspiciatis molestias nulla accusamus modi error ipsa?
        Amet, veniam laborum officiis a voluptate cum, dolores aliquid qui
        expedita facere corporis architecto excepturi? A aliquid laborum
        cupiditate velit neque corrupti quo atque eum unde facilis adipisci
        natus dicta, aut, facere in! Quisquam non repellat alias debitis
        pariatur in sed saepe vitae fuga aut? Pariatur unde rerum molestias
        numquam reiciendis. Velit ea iusto repellat odio labore sapiente animi
        quibusdam aliquam deleniti dignissimos. Qui, aut sunt eaque odit iste,
        rerum saepe atque ab eveniet a laudantium fuga eos, natus dolore
        repudiandae accusantium nihil cupiditate cum similique perferendis quae
        officiis! Voluptas fugit in quos perferendis odio itaque natus odit, quo
        nesciunt dolorum ipsa atque magni nobis rerum labore deleniti, eum
        molestiae accusamus reiciendis ut obcaecati possimus doloremque ducimus.
        Ratione fugiat quidem culpa hic molestiae nobis eius necessitatibus
        officiis iste fugit iusto ipsam magnam quos autem tempore, omnis dolores
        id nisi, quaerat tenetur? Sequi dolor ipsam animi aperiam maxime aliquam
        tenetur corporis alias, repudiandae expedita tempora consequuntur ullam
        soluta asperiores porro, possimus minima placeat. Dolorum corporis
        incidunt consequuntur doloremque sequi beatae optio nulla unde deserunt
        eum, numquam dignissimos, aliquid eveniet commodi, voluptatibus facere?
        Doloribus pariatur labore sint numquam optio vitae ipsam quia
        consectetur quaerat dolore. Ipsam vel minus perferendis possimus,
        praesentium exercitationem eveniet minima soluta optio corporis
        accusamus ratione temporibus consectetur, sapiente quaerat amet a vero
        suscipit, ut animi tenetur. Nemo quidem excepturi accusantium magni
        repellat doloribus numquam necessitatibus pariatur! Quaerat optio
        tenetur sed doloremque impedit velit! Accusamus blanditiis dolorum est
        id saepe vel nesciunt magnam perferendis pariatur inventore possimus ea
        consectetur doloribus, dolorem quisquam assumenda? Enim, repudiandae
        veniam aut eaque ullam tempora dignissimos voluptatibus dolorum, qui
        quasi ut rem illo, molestiae ipsam? Mollitia minima possimus harum porro
        consequuntur ipsa quis corporis esse laborum dignissimos dolor cumque,
        nemo alias quidem iusto qui error ad aspernatur? Ex quasi eos nam, unde
        voluptate, reiciendis harum aut recusandae fugiat perferendis ut
        praesentium aperiam error. Voluptatibus excepturi ab distinctio est
        voluptas nobis tenetur ipsa eligendi! Ex, atque ad voluptas consectetur
        cupiditate doloribus dolor nobis, quo explicabo ea maiores architecto
        error consequatur? Reprehenderit nemo dolorem obcaecati voluptas
        delectus animi expedita.
      </p>
    </div>
  );
}

export default App;
