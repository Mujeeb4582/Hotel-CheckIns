import { gql } from "@apollo/client";

// Mutation for multiple insertions
export const INSERT_MULTIPLE_CHECKINS = gql`
  mutation InsertMultipleCheckIns($checkIns: [check_in_insert_input!]!) {
    insert_check_in(objects: $checkIns) {
      affected_rows
    }
  }
`;

// Mutation for single insertion
export const INSERT_SINGLE_CHECKIN = gql`
  mutation InsertSingleCheckIn($checkIn: check_in_insert_input!) {
    insert_check_in_one(object: $checkIn) {
      id
      name
    }
  }
`;
