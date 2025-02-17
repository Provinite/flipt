import { IConstraint } from './Constraint';
import { IPageable } from './Pageable';
import { IFilterable } from './Selectable';

export interface ISegmentBase {
  key: string;
  name: string;
  description: string;
  matchType: SegmentMatchType;
}

export interface ISegment extends ISegmentBase {
  createdAt: string;
  updatedAt: string;
  constraints?: IConstraint[];
}

export enum SegmentMatchType {
  ALL = 'ALL_MATCH_TYPE',
  ANY = 'ANY_MATCH_TYPE'
}

export function segmentMatchTypeToLabel(matchType: SegmentMatchType): string {
  switch (matchType) {
    case SegmentMatchType.ALL:
      return 'All';
    case SegmentMatchType.ANY:
      return 'Any';
    default:
      return 'Unknown';
  }
}

export interface ISegmentList extends IPageable {
  segments: ISegment[];
}

export type FilterableSegment = ISegment & IFilterable;
