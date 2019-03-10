pragma solidity ^0.5.5;


library IndexedMerkleProof {
    function compute(bytes memory proof, uint160 leaf) internal pure returns (uint160 root, uint256 index) {
        uint160 computedHash = leaf;

        for (uint256 i = 0; i < proof.length/20; i++) {
            uint160 proofElement;
            // solium-disable-next-line security/no-inline-assembly
            assembly {
                proofElement := div(mload(add(proof, add(32, mul(i, 20)))), 0x1000000000000000000000000)
            }

            if (computedHash < proofElement) {
                // Hash(current computed hash + current element of the proof)
                computedHash = uint160(uint256(keccak256(abi.encodePacked(computedHash, proofElement))));
                index |= (1 << i);
            } else {
                // Hash(current element of the proof + current computed hash)
                computedHash = uint160(uint256(keccak256(abi.encodePacked(proofElement, computedHash))));
            }
        }

        return (computedHash, index);
    }
}
