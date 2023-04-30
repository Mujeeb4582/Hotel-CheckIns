import { gql } from "@apollo/client";

export const GET_ALL_CHECKINS = gql`
  query {
    check_in {
      id
      comment
      created_at
      image_url
      name
      updated_at
    }
  }
`;

export const GET_CHECKIN_BY_ID = gql`
  query GetCheckInById($id: Int!) {
    check_in_by_pk(id: $id) {
      id
      comment
      created_at
      image_url
      name
      updated_at
    }
  }
`;
