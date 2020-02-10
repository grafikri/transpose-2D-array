const transpose2D = require("../dist")

describe("Transpose", () => {
  it("Basic transpose", () => {
    const given = [[[1]], [[2]]]

    const expected = [[[1], [2]]]

    expect(transpose2D(given)).toStrictEqual(expected)
  })

  it("Vertical transpose", () => {
    const given = [
      [[1], [1], [1], [1]],
      [[2], [2], [2], [2]]
    ]

    const expected = [
      [[1], [2]],
      [[1], [2]],
      [[1], [2]],
      [[1], [2]]
    ]

    expect(transpose2D(given)).toStrictEqual(expected)
  })

  it("Horizontal transpose", () => {
    const given = [
      [[1], [2]],
      [[1], [2]],
      [[1], [2]],
      [[1], [2]]
    ]

    const expected = [
      [[1], [1], [1], [1]],
      [[2], [2], [2], [2]]
    ]

    expect(transpose2D(given)).toStrictEqual(expected)
  })

  it("Square transpose", () => {
    const given = [
      [[1], [2], [3], [4]],
      [[1], [2], [3], [4]],
      [[1], [2], [3], [4]],
      [[1], [2], [3], [4]]
    ]

    const expected = [
      [[1], [1], [1], [1]],
      [[2], [2], [2], [2]],
      [[3], [3], [3], [3]],
      [[4], [4], [4], [4]]
    ]

    expect(transpose2D(given)).toStrictEqual(expected)
  })

  it("Complex transpose", () => {
    const given = [
      [
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4]
      ],
      [
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4]
      ],
      [
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4]
      ],
      [
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4]
      ]
    ]

    const expected = [
      [
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1]
      ],
      [
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2]
      ],
      [
        [3, 3],
        [3, 3],
        [3, 3],
        [3, 3]
      ],
      [
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4]
      ]
    ]

    expect(transpose2D(given)).toStrictEqual(expected)
  })
})
