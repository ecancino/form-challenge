const model = formChange$ => formChange$.map(([ user, regions ]) => ({ regions, user }))

export default model
