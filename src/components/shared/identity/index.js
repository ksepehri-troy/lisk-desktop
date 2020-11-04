import React, {
  useEffect,
  useLayoutEffect, useMemo, useRef, useState,
} from 'react';
import { truncateAddress } from '../../../utils/account';
import regex from '../../../utils/regex';
import AccountVisual from '../../toolbox/accountVisual';


import styles from './styles.css';

const getPrimaryValue = ({
  username, address, publicKey, bookmark,
}) => {
  const addressOrPublicKey = address || publicKey;
  if (username) {
    if (bookmark) {
      return [username, bookmark];
    }
    return [username, addressOrPublicKey];
  }

  if (bookmark) {
    return [bookmark, addressOrPublicKey];
  }

  return [address, publicKey];
};

const AccountInfo = ({
  prefix, username, bookmark, address, publicKey, size, postfix, preventTruncation,
}) => {
  const conatinerRef = useRef();

  const [text, caption] = getPrimaryValue({
    username, address, publicKey, bookmark,
  });


  const isTruncated = useMemo(() => {
    if (conatinerRef.current) {
      const { width } = conatinerRef.current.getBoundingClientRect();
      if (width < 350) {
        return true;
      }
      return false;
    }
    return false;
  }, [conatinerRef.current]);

  return (
    <div ref={conatinerRef} className={styles.container}>
      {prefix !== undefined && <span className={styles.prefix}>{prefix}</span>}
      {address && <AccountVisual address={address} size={size} />}
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <span>{isTruncated ? truncateAddress(text) : text}</span>
          {postfix && <span className={styles.postfix}>{postfix}</span>}
        </div>
        <span className={styles.captionContainer}>
          {isTruncated ? caption.replace(regex.publicKeyTrunk, '$1...$3') : caption}
        </span>
      </div>
    </div>
  );
};

export default AccountInfo;
