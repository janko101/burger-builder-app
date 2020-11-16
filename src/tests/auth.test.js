import reducer from "../store/reducers/auth";
import * as actionTypes from "../store/actions/actionTypes";

describe("auth reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
  it("should store the token and userId when authenticated", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          tokenId: "some-token",
          userId: "some-userId",
        }
      )
    ).toEqual({
      token: "some-token",
      userId: "some-userId",
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
});
