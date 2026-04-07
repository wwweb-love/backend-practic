import styled from "styled-components"
import { Routes, Route } from "react-router-dom"
import { Header } from "./components"
import { Authorization, Registration, Users, Post, Main } from "./pages"
import { Footer } from "./components"
import { useLayoutEffect } from "react"
import { useDispatch } from "react-redux"
import { setUser } from "./action"
import { Modal } from "./components"
import { ERROR } from "./constants/error"
import { Content } from "./components"

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  background-color: #fff;
  margin: 0 auto;
`
const Page = styled.div`
  padding: 120px 0 20px;
  margin: 0 auto;
`

function Blog() {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem('userData') || null

    if (!currentUserDataJSON) {
      return ;
    }
    const currentUserData = JSON.parse(currentUserDataJSON)
    dispatch(setUser({
      ...currentUserData,
      roleId: Number(currentUserData.roleId)
    }))
  }, [dispatch])

  return (
    <AppColumn>
      <Header />
      {/* <i className="fa fa-camera-retro"></i> */}
      <Page>

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Authorization />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="/post/:id/edit" element={<Post />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="*" element={<Content error={ERROR.PAGE_NOT_EXIST} />}></Route>
        </Routes>
      </Page>
      <Footer />
      <Modal />
    </AppColumn>
  )
}

export default Blog




// {
//       "id": "002",
//       "title": "Товарищи! рамки и место обучения кадров влечет за собой процесс внедрения",
//       "image_url": "https://fastly.picsum.photos/id/690/280/150.jpg?hmac=suJEFhFOQ9QrV_VgzarjeL-640kY1xq-xcRyk5qNIA4",
//       "content": "Таким образом рамки и место обучения кадров позволяет оценить значение направлений прогрессивного развития. Задача организации, в особенности же рамки и место обучения кадров влечет за собой процесс внедрения и модернизации соответствующий условий активизации. \n Задача организации, в особенности же реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Идейные соображения высшего порядка, а также консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.",
//       "published_at": "2025-09-22"
//     },
//     {
//       "id": "003",
//       "title": "С другой стороны реализация намеченных плановых заданий играет важную роль ",
//       "image_url": "https://fastly.picsum.photos/id/1029/280/150.jpg?hmac=UTqBJddH-kQhvy69L1dm1PJgaflmPc0RGMh7GeSBz1g",
//       "content": "Задача организации, в особенности же рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. С другой стороны рамки и место обучения кадров в значительной степени обуславливает создание направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что укрепление и развитие структуры способствует подготовки и реализации новых предложений. С другой стороны постоянный количественный рост и сфера нашей активности способствует подготовки и реализации систем массового участия",
//       "published_at": "2023-04-15"
//     },